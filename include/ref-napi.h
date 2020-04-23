#ifndef REF_NAPI_H
#define REF_NAPI_H

#include <get-symbol-from-current-process.h>
#include "napi.h"

// The definitions in this file are intended to be used by node-ffi-napi.
#define DEFINE_NAPIX_INSTANCE_DATA_ACCESSORS                                   \
  typedef napi_status (*napi_set_instance_data_fn)(                            \
    napi_env env, void* data, napi_finalize finalize_cb, void* finalize_hint); \
  typedef napi_status (*napi_get_instance_data_fn)(                            \
    napi_env env, void** data);                                                \
                                                                               \
  static const napi_get_instance_data_fn napix_get_instance_data =             \
      (napi_get_instance_data_fn)                                              \
          get_symbol_from_current_process("napi_get_instance_data");           \
  static const napi_set_instance_data_fn napix_set_instance_data =             \
      (napi_set_instance_data_fn)                                              \
          get_symbol_from_current_process("napi_set_instance_data");           \

namespace RefNapi {

class Instance {
 public:
  virtual napi_value WrapPointer(char* ptr, size_t length) = 0;
  virtual char* GetBufferData(napi_value val) = 0;
  virtual void RegisterArrayBuffer(napi_value val) = 0;
};

}

#endif
