#ifndef REF_NAPI_H
#define REF_NAPI_H

#if !defined(NAPI_VERSION) || NAPI_VERSION < 6
#include <get-symbol-from-current-process.h>
#endif
#include "napi.h"

// The definitions in this file are intended to be used by node-ffi-napi.

namespace RefNapi {

class Instance {
 public:
  virtual napi_value WrapPointer(char* ptr, size_t length) = 0;
  virtual char* GetBufferData(napi_value val) = 0;
  virtual void RegisterArrayBuffer(napi_value val) = 0;
};

}

#endif
