# IVONA

`ivona` is a client library for [IVONA Text-to-Speech SaaS](http://www.ivona.com/en/saas/) written in [Node.js](http://nodejs.org/).

## Installation

    $ npm install ivona

## Usage

```js
var ivona = new (require('ivona'))({
  email: IVONA_LOGIN_EMAIL,
  key: IVONA_API_KEY
});
```

### API ([documentation](http://developer.ivona.com/ivona-tts-saas))

The client automatically handles token authentication therefore the following API calls can be made right away.

`token` and `md5` parameters can be omitted or specified.

#### Create Speech File

```js
ivona.createSpeechFile({
  text: '...',
  contentType: '...',
  voiceId: '...',
  codecId: '...'
}), function (err, fileId, soundUrl) {
  // ...
});
```

#### Create Speech File w/ Marks

```js
ivona.createSpeechFileWithMarks({
  text: '...',
  contentType: '...',
  voiceId: '...',
  codecId: '...'
}), function (err, fileId, soundUrl, marksUrl) {
  // ...
});
```

#### Delete Speech File

```js
ivona.deleteSpeechFile({
  fileId: '...'
}, function (err, success) {
  // ...
});
```

#### List Speech Files

```js
ivona.listSpeechFiles(function (err, speechFiles) {
  // ...
});
```

#### Get Speech File Data

```js
ivona.getSpeechFileData({
  fileId: '...'
}, function (err, result) {
  // ...
});
```

#### Get Speech File Data w/ Marks

```js
ivona.getSpeechFileDataWithMarks({
  fileId: '...'
}, function (err, result) {
  // ...
});
```

#### List Pronunciation Rules

```js
ivona.listPronunciationRules({
  langId: '...'
}, function (err, rules) {
  // ...
});
```

#### Add Pronunciation Rule

```js
ivona.addPronunciationRule({
  langId: '...',
  stat: #,
    // 1 – simple substitutions, case insensitive
    // 2 – simple substitutions, case sensitive
    // 3 – regular expressions
  key: '...',
  value: '...'
}, function (err, success) {
  // ...
});
```

#### Modify Pronunciation Rule

```js
ivona.modifyPronunciationRule({
  langId: '...',
  id: '...',
  stat: '...',
  key: '...',
  value: '...'
}, function (err, success) {
  // ...
});
```

#### Delete Pronunciation Rule

```js
ivona.deletePronunciationRule({
  langId: '...',
  id: '...'
}, function (err, success) {
  // ...
});
```

#### Check Text Price

```js
ivona.checkTextPrice({
  text: '...',
  voiceId: '...'
}, function (err, price) {
  // ...
});
```

#### Get User Agreement Data

```js
ivona.getUserAgreementData(function (err, result) {
  // ...
});
```

#### List Voices

```js
ivona.listVoices(function (err, voices) {
  // ...
});
```

#### List Voices Extended

```js
ivona.listVoicesExtended({
  locale: '...'
}, function (err, voices) {
  // ...
});
```

#### Get Voice Data

```js
ivona.getVoiceData({
  voiceId: '...'
}, function (err, result) {
  // ...
});
```

#### List Codecs

```js
ivona.listCodecs(function (err, codecs) {
  // ...
});
```

## Credits

  See the [contributors](https://github.com/pilwon/node-ivona/graphs/contributors).

## License

  `ivona` is released under the [MIT License](http://opensource.org/licenses/MIT).
