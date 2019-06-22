
# Mongo-Boiler

> Mongo database quick-start boilerplate

---

## Links & Resources

- [`mongoDB`](https://github.com/mongodb/node-mongodb-native)
  - [Documentation](https://docs.mongodb.com/)
  - [Get Started](https://docs.mongodb.com/manual/tutorial/getting-started/)
  - [Installation](https://docs.mongodb.com/manual/installation/#tutorial-installation)
    - [Windows Install](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)

- [`mongoose`](https://github.com/Automattic/mongoose)

## MongoDB Installation & Setup

A standalone installer can be found at: [mongodb/download-center](https://www.mongodb.com/download-center/community)

1. Install `MongoDB`

    ```sh
    # Install with chocolately
    $ choco install mongodb -y
    # Installs to: 'C:\Program Files\MongoDB\'
    ```

2. Create data directory

    ```sh
    # Default data path: 'C:\ProgramData\MongoDB\data\db'
    $ mkdir data/db
    ```

3. Start `MongoDB`

    ```sh
    # Run MongoDB server
    $ "C:\Program Files\MongoDB\Server\4.0\bin\mongod.exe" --dbpath="C:\ProgramData\MongoDB\data\db"
    # [initandlisten] waiting for connections
    ```

4. Connect to `MongoDB`

    ```sh
    # In a new terminal window with admin privileges
    $ "C:\Program Files\MongoDB\Server\4.0\bin\mongo.exe"
    ```

---
