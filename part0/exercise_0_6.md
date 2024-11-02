sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: JavaScript code determines input as JSON String and new note is appended to notes list
    deactivate server
    Note right of browser: Status code 201 Created, the page is not reloaded.
