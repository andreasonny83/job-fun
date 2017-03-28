# Job Fun

> This is very much just a work in progress project

## Table of contents

* [Installation](#installation)
* [Usage](#usage)
  * [Development](#development)
  * [Firebase](#firebase)
  * [Deployment](#deployment)
* [Contributing](#contributing)
* [Changelog](#changelog)
* [License](#license)

## Installation

Clone this repository

```sh
$ git clone https://github.com/andreasonny83/job-fun.git
```

Change directory to our repo

```sh
$ cd job-fun
```

Install the node dependencies

```bash
# You can either use npm with
$ npm install
# Or Yarn for a faster installation
$ yarn install
```

## Usage

### Development

```bash
$ npm start
```

To start the application and automatically recompile on file-changes.

## Firebase

This project uses Firebase as hosting provider, database and authentication solution.
Remove the `.example` extension from the following files if you want to deploy this
project using your Firebase account:
`.firebaserc.example`, `database.rules.json.example` and `firebase.json.example`

For initializing this project in a Firebase project use `firebase init` after you've
installed Firebase CLI and followed the official instructions
[available here](https://firebase.google.com/docs/hosting/)

## Deployment

After you've copleted the Firebase set up from the previous step, you can just run
the follong command from your terminal to deploy the app.

`npm run deploy`

## Contributing

1.  Fork and clone it!
1.  Create your feature branch: `git checkout -b my-new-feature`
1.  Commit your changes: `git commit -am 'Add some feature'`
1.  Push to the branch: `git push origin my-new-feature`
1.  Submit a [Pull Request](https://github.com/andreasonny83/job-fun/pull/new/master)

## Changelog

Changelog available [here](https://github.com/andreasonny83/job-fun/blob/master/CHANGELOG.md)

## License

[MIT License](https://github.com/andreasonny83/job-fun/blob/master/LICENSE) © Andrea SonnY
