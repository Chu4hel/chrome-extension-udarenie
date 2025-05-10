# chrome-extension-udarenie

# Расширение "Ударение" для Chrome-браузеров

Простое расширение для браузеров на основе Chromium (Google Chrome, Edge, Opera, Brave и др.), которое помогает быстро ставить знак ударения (аку́т) на русскую гласную букву.

![Пример работы расширения](https://dcs99ww84zr4t.cloudfront.net/e8tlhw%2Fpreview%2F67020833%2Fmain_large.gif?response-content-disposition=inline%3Bfilename%3D%22main_large.gif%22%3B&response-content-type=image%2Fgif&Expires=1746868831&Signature=H0BE8YOPp1Da~akyubPkFSpoBSffVZH06P2qX~-NFDoS8QEe7M5w2obvw9Hp~ZWzFtJ9MWMsmhnl6AI8vqpEDuT516XxssWqMNGfRgiIn2CUmHmqdnmPsXK6Vn549f8Vi1~Nrg0FIbJOJdgMonhzZEw4V8t4bKS5Eb3xeoie49jDbaPL7fnMMXa6GsYQvt7t2Gh4xGbn3-FrszHx0AKG2MLiDXjGdSEhF5jwPlezpES5~mDoXlNeqLYg5uxkZhgyY6BrI4~c3S-0tHRIgiqqUhmlz84S6PGOYGjECEBeKCHEExi7wLSDrvztqz8NkJ8sIM1NH0LY21fdf49an6-CEg__&Key-Pair-Id=APKAJT5WQLLEOADKLHBQ)

## ✨ Возможности

*   Быстрая вставка знака ударения (U+0301) после гласной буквы.
*   Активация по настраиваемой горячей клавише (по умолчанию `Ctrl+Shift+A`).
*   Работает в текстовых полях (`<input type="text">`, `<textarea>`) и редактируемых элементах (`contenteditable`).

## 🚀 Установка

### Локальная установка

1.  Скачайте этот репозиторий (кнопка "Code" -> "Download ZIP") или клонируйте его:
    ```bash
    git clone https://github.com/Chu4hel/chrome-extension-udarenie/.git
    ```
2.  Распакуйте архив, если скачивали ZIP.
3.  Откройте ваш браузер на основе Chromium.
4.  Перейдите на страницу расширений: `chrome://extensions` (или `edge://extensions`, `brave://extensions` и т.д.).
5.  Включите "Режим разработчика" (обычно переключатель в правом верхнем углу).
6.  Нажмите кнопку "Загрузить распакованное расширение".
7.  Выберите папку, в которую вы скачали/клонировали и распаковали файлы расширения (папку, где находится `manifest.json`).
8.  Расширение готово к работе!

## ⌨️ Как использовать

1.  Установите текстовый курсор ввода *перед* той русской гласной буквой, на которую вы хотите поставить ударение.
2.  Нажмите сочетание клавиш `Ctrl+Shift+A` (по умолчанию).
3.  Знак ударения появится над гласной буквой, которая следовала за курсором.

**Пример:**
Чтобы получить "приве́т":
1. Наберите "привет"
2. Поставьте курсор между "в" и "е": `прив|ет`
3. Нажмите `Ctrl+Shift+A`
4. Результат: `приве́т`

Горячую клавишу можно изменить на странице настроек расширений (`chrome://extensions/shortcuts`).
