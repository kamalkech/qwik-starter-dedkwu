import { component$, $ } from '@builder.io/qwik';
import { Field } from '~/utils/types';

export default component$(() => {
  const fields: Field[] = [
    {
      type: 'input',
      name: 'username',
      attributes: {
        id: 'username',
        label: 'Username',
        classes: ['class-username'],
      },
    },
    {
      type: 'checkbox',
      name: 'choice',
      attributes: {
        id: 'choice',
        label: 'Choice',
        classes: ['class-choice'],
      },
    },
  ];

  const onSubmit = $((data: any) => {
    console.log('onSubmit', data);
  });

  const onChangeValues = $((data: any) => {
    console.log('onChangeValues', data);
  });

  return (
    <>
      <h1>Formly</h1>
    </>
  );
});