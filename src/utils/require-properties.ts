import * as Lodash from 'lodash';
import { TObjectJSONSchema } from '../types/object-json-schema';
import { cloneWith } from './clone-with';

export function requireProperties(schema: TObjectJSONSchema, properties: string[], options: { preserveExisting?: boolean } = {}): TObjectJSONSchema {
  if (options.preserveExisting && schema.required) {
    properties = Lodash.uniq(properties.concat(schema.required.map(key => key.toString())));
  }
  return cloneWith(schema, { required: properties });
}
