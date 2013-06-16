/*
 * lib/index.js
 */

'use strict';

var crypto = require('crypto');

var _ = require('lodash'),
    soap = require('soap');

var Ivona = function (config) {
  this._client = null;
  this._config = config;

  _.defaults(this._config, {
    wsdl: 'http://api.ivona.com/saasapiwsdl.xml'
  });
};

Ivona.prototype._attachAuth = function (client, params, cb) {
  var key = this._config.key;

  function generateMD5(token) {
    function md5(value) {
      return crypto.createHash('md5').update(value).digest('hex');
    }
    return md5(md5(key) + token);
  }

  client.getToken({
    email: this._config.email
  }, function (err, result) {
    if (err) { return cb(err); }
    cb(null, client, _.defaults(params, {
      token: result.token,
      md5: generateMD5(result.token)
    }));
  });
};

Ivona.prototype._getClient = function (params, cb) {
  var self = this;

  if (self._client) {
    return self._attachAuth(self._client, params, cb);
  } else {
    soap.createClient(self._config.wsdl, function (err, client) {
      if (err) { return cb(err); }
      self._client = client;
      return self._attachAuth(self._client, params, cb);
    });
  }
};

Ivona.prototype.createSpeechFile = function (params, cb) {
  this._getClient(params, function (err, client, params) {
    if (err) { return cb(err); }
    client.createSpeechFile(params, function (err, result) {
      if (err) { return cb(err); }
      cb(null, result.fileId, result.soundUrl);
    });
  });
};

Ivona.prototype.createSpeechFileWithMarks = function (params, cb) {
  this._getClient(params, function (err, client, params) {
    if (err) { return cb(err); }
    client.createSpeechFileWithMarks(params, function (err, result) {
      if (err) { return cb(err); }
      cb(null, result.fileId, result.soundUrl, result.marksUrl);
    });
  });
};

Ivona.prototype.deleteSpeechFile = function (params, cb) {
  this._getClient(params, function (err, client, params) {
    if (err) { return cb(err); }
    client.deleteSpeechFile(params, function (err, result) {
      if (err) { return cb(err); }
      cb(null, result.success);
    });
  });
};

Ivona.prototype.getUserAgreementData = function (cb) {
  this._getClient({}, function (err, client, params) {
    if (err) { return cb(err); }
    client.getUserAgreementData(params, function (err, result) {
      if (err) { return cb(err); }
      cb(null, result);
    });
  });
};

Ivona.prototype.listSpeechFiles = function (cb) {
  this._getClient({}, function (err, client, params) {
    if (err) { return cb(err); }
    client.listSpeechFiles(params, function (err, result) {
      if (err) { return cb(err); }
      cb(null, result.utterances.item);
    });
  });
};

Ivona.prototype.getSpeechFileData = function (params, cb) {
  this._getClient(params, function (err, client, params) {
    if (err) { return cb(err); }
    client.getSpeechFileData(params, function (err, result) {
      if (err) { return cb(err); }
      cb(null, result);
    });
  });
};

Ivona.prototype.getSpeechFileDataWithMarks = function (params, cb) {
  this._getClient(params, function (err, client, params) {
    if (err) { return cb(err); }
    client.getSpeechFileDataWithMarks(params, function (err, result) {
      if (err) { return cb(err); }
      cb(null, result);
    });
  });
};

Ivona.prototype.listPronunciationRules = function (params, cb) {
  this._getClient(params, function (err, client, params) {
    if (err) { return cb(err); }
    client.listPronunciationRules(params, function (err, result) {
      if (err) { return cb(err); }
      cb(null, result.pronunciationRules);
    });
  });
};

Ivona.prototype.addPronunciationRule = function (params, cb) {
  this._getClient(params, function (err, client, params) {
    if (err) { return cb(err); }
    client.addPronunciationRule(params, function (err, result) {
      if (err) { return cb(err); }
      cb(null, result.success);
    });
  });
};

Ivona.prototype.modifyPronunciationRule = function (params, cb) {
  this._getClient(params, function (err, client, params) {
    if (err) { return cb(err); }
    client.modifyPronunciationRule(params, function (err, result) {
      if (err) { return cb(err); }
      cb(null, result.success);
    });
  });
};

Ivona.prototype.deletePronunciationRule = function (params, cb) {
  this._getClient(params, function (err, client, params) {
    if (err) { return cb(err); }
    client.deletePronunciationRule(params, function (err, result) {
      if (err) { return cb(err); }
      cb(null, result.success);
    });
  });
};

Ivona.prototype.checkTextPrice = function (params, cb) {
  this._getClient(params, function (err, client, params) {
    if (err) { return cb(err); }
    client.checkTextPrice(params, function (err, result) {
      if (err) { return cb(err); }
      cb(null, result.charactersPrice);
    });
  });
};

Ivona.prototype.getUserAgreementData = function (cb) {
  this._getClient({}, function (err, client, params) {
    if (err) { return cb(err); }
    client.getUserAgreementData(params, function (err, result) {
      if (err) { return cb(err); }
      cb(null, result);
    });
  });
};

Ivona.prototype.listVoices = function (cb) {
  this._getClient({}, function (err, client, params) {
    if (err) { return cb(err); }
    client.listVoices(params, function (err, result) {
      if (err) { return cb(err); }
      cb(null, result.voices.item);
    });
  });
};

Ivona.prototype.listVoicesExtended = function (params, cb) {
  this._getClient(params, function (err, client, params) {
    if (err) { return cb(err); }
    client.listVoicesExtended(params, function (err, result) {
      if (err) { return cb(err); }
      cb(null, result.voices.item);
    });
  });
};

Ivona.prototype.getVoiceData = function (params, cb) {
  this._getClient(params, function (err, client, params) {
    if (err) { return cb(err); }
    client.getVoiceData(params, function (err, result) {
      if (err) { return cb(err); }
      cb(null, result);
    });
  });
};

Ivona.prototype.listCodecs = function (cb) {
  this._getClient({}, function (err, client, params) {
    if (err) { return cb(err); }
    client.listCodecs(params, function (err, result) {
      if (err) { return cb(err); }
      cb(null, result.codecs.item);
    });
  });
};

// Public API
exports = module.exports = Ivona;
