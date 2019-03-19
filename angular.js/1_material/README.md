
# angular-material


```json
    "scripts": 
    {
        "postinstall": "npm run copy-libs",
        "update-deps": "npm update",
        "postupdate-deps": "npm run copy-libs",
        "copy-libs": "cpx \"node_modules/{angular,angular-*}/**/*\" app/lib -C",
        "prestart": "npm install",
        "start": "http-server -a localhost -p 8000 -c-1 ./app",
        "test": "echo \"Error: no test specified\" && exit 1"
    },
```


----

