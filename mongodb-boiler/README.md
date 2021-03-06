
# MongoDB Boilerplate

> Mongo database quick-start boilerplate

---

## Links & Resources

- [`mongoDB`](https://github.com/mongodb/node-mongodb-native)
  - [Documentation](https://docs.mongodb.com/)
  - [Get Started](https://docs.mongodb.com/manual/tutorial/getting-started/)
  - [Installation](https://docs.mongodb.com/manual/installation/#tutorial-installation)
    - [Windows Install](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)
  - [Tutorials](https://github.com/mongodb/node-mongodb-native/tree/master/docs/reference/content/tutorials)

- [`mongoose`](https://github.com/Automattic/mongoose)

- [API Reference](http://mongodb.github.io/node-mongodb-native/3.1/api/)

---

## `MongoDB` Installation & Setup

Install either programatically with `chocolatey` or using the standalone installer which can be found at: [mongodb/download-center](https://www.mongodb.com/download-center/community)

1. Install `MongoDB`

    ```powershell
    # Install with chocolatey
    $ choco install mongodb -y
    # Installs to: 'C:\Program Files\MongoDB\'
    ```

2. Create data directory

    ```powershell
    # Default data path: 'C:\ProgramData\MongoDB\data\db'
    $ mkdir data\db
    ```

3. Start `MongoDB`

    ```powershell
    # Run MongoDB server
    $ "C:\Program Files\MongoDB\Server\4.0\bin\mongod.exe" --dbpath="C:\ProgramData\MongoDB\data\db"
    # [initandlisten] waiting for connections
    ```

4. Connect to `MongoDB`

    ```powershell
    # In a new terminal window with admin privileges
    $ "C:\Program Files\MongoDB\Server\4.0\bin\mongo.exe"
    ```

---

## Databases Structure & Usage

- [Databases & Collections](https://docs.mongodb.com/manual/core/databases-and-collections/)

- [Documents](https://docs.mongodb.com/manual/core/document/)

---
