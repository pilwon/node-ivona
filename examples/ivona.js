/*
 * examples/ivona.js
 */

'use strict';

require('colors');

var ivona = new (require('..'))({
  email: 'XXX',
  key: 'XXX'
});

ivona.createSpeechFile({
  text: 'Hello, this is just a test. Let\'s see how cool this sounds!',
  contentType: 'text/plain',
  voiceId: 'en_us_joey',
  codecId: 'mp3/22050'
}, function (err, fileId, soundUrl) {
  if (err) { return console.error(err); }
  console.log('== Speech File =='.cyan);
  console.log('[%s] %s', fileId, soundUrl);
});

ivona.createSpeechFileWithMarks({
  text: 'Alice was awaken by some strange noise...<voice name="Kimberly">"Who\'s there?"</voice> she asked fearfully.<prosody rate="75%"><voice name="Emma">"It\'s Sally here, don\'t be afraid. Sleep well!"</voice></prosody> Sally answered with her flegmatic voice.',
  contentType: 'text/ssml',
  voiceId: 'en_us_joey',
  codecId: 'ogg/22050'
}, function (err, fileId, soundUrl, marksUrl) {
  if (err) { return console.error(err); }
  console.log('== Speech File w/ Marks =='.cyan);
  console.log('[%s] %s', fileId, soundUrl);
  console.log(marksUrl);
});

ivona.deleteSpeechFile({
  fileId: 'XXX'
}, function (err, success) {
  if (err) { return console.error(err); }
  console.log('== Delete Speech File =='.cyan);
  console.log(success);
});

ivona.listSpeechFiles(function (err, speechFiles) {
  if (err) { return console.error(err); }
  console.log('== Speech Files =='.cyan);
  console.log(speechFiles);
});

ivona.getSpeechFileData({
  fileId: 'XXX'
}, function (err, result) {
  if (err) { return console.error(err); }
  console.log('== Speech File Data =='.cyan);
  console.log(result);
});

ivona.getSpeechFileDataWithMarks({
  fileId: 'XXX'
}, function (err, result) {
  if (err) { return console.error(err); }
  console.log('== Speech File Data w/ Marks =='.cyan);
  console.log(result);
});

ivona.listPronunciationRules({
  langId: 'en'
}, function (err, rules) {
  if (err) { return console.error(err); }
  console.log('== Pronunciation Rules =='.cyan);
  console.log(rules);
});

ivona.addPronunciationRule({
  langId: 'en',
  stat: 2,
    // 1 – simple substitutions, case insensitive
    // 2 – simple substitutions, case sensitive
    // 3 – regular expressions
  key: 'GOOG',
  value: 'Google'
}, function (err, success) {
  if (err) { return console.error(err); }
  console.log('== Add Pronunciation Rule =='.cyan);
  console.log(success);
});

ivona.modifyPronunciationRule({
  langId: 'en',
  id: '',
  stat: '',
  key: '',
  value: ''
}, function (err, success) {
  if (err) { return console.error(err); }
  console.log('== Modify Pronunciation Rule =='.cyan);
  console.log(success);
});

ivona.deletePronunciationRule({
  langId: 'en',
  id: ''
}, function (err, success) {
  if (err) { return console.error(err); }
  console.log('== Delete Pronunciation Rule =='.cyan);
  console.log(success);
});

ivona.checkTextPrice({
  text: 'Jan is one of IVONA TTS voices. It\'s a male voice, intended for Polish speaking users. Maja is one of IVONA TTS voices. It\'s a female voice, intended for Polish speaking users. Carmen is one of IVONA TTS voices. It\'s a female voice, intended for Romanian speaking users.',
  voiceId: 'en_us_joey'
}, function (err, price) {
  if (err) { return console.error(err); }
  console.log('== Text Price =='.cyan);
  console.log(price);
});

ivona.getUserAgreementData(function (err, result) {
  if (err) { return console.error(err); }
  console.log('== User Agreement Data =='.cyan);
  console.log(result);
});

ivona.listVoices(function (err, voices) {
  if (err) { return console.error(err); }
  console.log('== Voices =='.cyan);
  console.log(voices);
});

ivona.listVoicesExtended({
  locale: 'en'
}, function (err, voices) {
  if (err) { return console.error(err); }
  console.log('== Voices (extended) =='.cyan);
  console.log(voices);
});

ivona.getVoiceData({
  voiceId: 'en_us_joey'
}, function (err, result) {
  if (err) { return console.error(err); }
  console.log('== Voice Data =='.cyan);
  console.log(result);
});

ivona.listCodecs(function (err, codecs) {
  if (err) { return console.error(err); }
  console.log('== Codecs =='.cyan);
  console.log(codecs);
});
