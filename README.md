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

<pre>
The MIT License (MIT)

Copyright (c) 2012-2014 Pilwon Huh

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
</pre>

[![Analytics](https://ga-beacon.appspot.com/UA-47034562-8/node-ivona/readme?pixel)](https://github.com/pilwon/node-ivona)
