import { PropFunction } from '@builder.io/qwik';

export interface Field {
  type: string;
  name: string;
  value?: any;
  attributes: Attributes;
}

export interface Attributes {
  id: string;
  label?: string;
  classes?: string[];
  placeholder?: string;
  disabled?: boolean;
  readonly?: boolean;
}

export interface FieldProps {
  field: Field;
  onChange: PropFunction<(field_name: string, args?: unknown) => unknown>;
}
