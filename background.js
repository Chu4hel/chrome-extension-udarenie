chrome.commands.onCommand.addListener(async function (command) {
  if (command === "add-accent") {
    try {
      const tabs = await chrome.tabs.query({ active: true, currentWindow: true });

      if (tabs && tabs.length > 0) {
        const tabId = tabs[0].id;

        if (tabId) {
          if (chrome.scripting && chrome.scripting.executeScript) {
            chrome.scripting.executeScript({
              target: { tabId: tabId },
              func: addAccentAtCursor,
            });
          } else {
            console.error("Ошибка: chrome.scripting.executeScript не доступен.");
          }
        } else {
          console.error("Не удалось найти активную вкладку.");
        }
      } else {
        console.error("Нет активных вкладок.");
      }
    } catch (error) {
      console.error("Ошибка при выполнении скрипта:", error);
    }
  }
});

function addAccentAtCursor() {
  try {
    let activeElement = document.activeElement;

    if (activeElement.tagName === "IFRAME") {
      const iframeDocument = activeElement.contentDocument || activeElement.contentWindow.document;
      activeElement = iframeDocument.activeElement;
    }

    function insertAccent(text, position) {
      const accents = {
        'а': 'а́', 'е': 'е́', 'и': 'и́', 'о': 'о́', 'у': 'у́',
        'ы': 'ы́', 'э': 'э́', 'ю': 'ю́', 'я': 'я́',
        'А': 'А́', 'Е': 'Е́', 'И': 'И́', 'О': 'О́', 'У': 'У́',
        'Ы': 'Ы́', 'Э': 'Э́', 'Ю': 'Ю́', 'Я': 'Я́'
      };
      for (let i = position; i < text.length; i++) {
        const char = text[i];
        if (accents[char]) {
          return text.slice(0, i) + accents[char] + text.slice(i + 1);
        }
      }
      return text;
    }

    if (
      activeElement.tagName === "TEXTAREA" ||
      (activeElement.tagName === "INPUT" && activeElement.type === "text") ||
      activeElement.isContentEditable
    ) {
      const selection = activeElement.ownerDocument.defaultView.getSelection();
      let cursorPosition;

      if (activeElement.tagName === "TEXTAREA" || activeElement.tagName === "INPUT") {
        cursorPosition = activeElement.selectionStart;
        const text = activeElement.value;

        const newText = insertAccent(text, cursorPosition);
        activeElement.value = newText;

        activeElement.setSelectionRange(cursorPosition + 1, cursorPosition + 1);
      } else if (activeElement.isContentEditable && selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        const textNode = range.startContainer;

        if (textNode.nodeType === Node.TEXT_NODE) {
          cursorPosition = range.startOffset;
          const text = textNode.nodeValue;

          const newText = insertAccent(text, cursorPosition);
          textNode.nodeValue = newText;

          range.setStart(textNode, cursorPosition + 1);
          range.setEnd(textNode, cursorPosition + 1);
          selection.removeAllRanges();
          selection.addRange(range);
        } else {
          console.warn("Указатель не находится на текстовом узле.");
        }
      }
    } else {
      console.warn("Активный элемент не является поддерживаемым текстовым элементом.");
    }
  } catch (error) {
    console.error("Ошибка при выполнении функции addAccentAtCursor:", error);
  }
}

