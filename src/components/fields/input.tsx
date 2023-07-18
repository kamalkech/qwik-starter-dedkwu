import { component$, $, useSignal, PropFunction } from '@builder.io/qwik';
import type { Field, FieldProps } from '~/utils/types';

export default component$<FieldProps>((props: FieldProps) => {
  const { field } = props;

  const onChange = $((_event: Event, element: HTMLInputElement) => {
    const value = element.value;
    props.onChange(field.name, value);
  });

  return (
    <>
      <input
        name={field.name}
        value={field.value ?? null}
        type={field.type}
        id={field.attributes.id}
        class={field.attributes?.classes?.join(' ')}
        placeholder={field.attributes?.placeholder}
        disabled={field.attributes?.disabled}
        readOnly={field.attributes?.readonly}
        onInput$={onChange}
      />
    </>
  );
});
