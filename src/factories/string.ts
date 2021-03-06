import { JSONSchemaType } from '../constants/json-schema-type';
import { TOptions } from '../types/options';
import { TStringJSONSchema } from '../types/string-json-schema';
import { makeSchema } from '../utils/make-schema';

export function string(options: TOptions<TStringJSONSchema> = {}): TStringJSONSchema {
  return makeSchema<TStringJSONSchema>(options, JSONSchemaType.STRING);
}
