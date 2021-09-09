import { render } from '@testing-library/react';
import { SelectInput } from '..';

describe('Components/SelectInput', () => {
  const props = {
    data: ['id', 'second id'],
    handleChange: (e: any) => console.log(e.target.value),
    selectedValue: 'id',
    defaultValue: 'Select a value',
    name: 'id',
    label: 'Sort by:',
  };

  test('it should render the data correct in the component', () => {
    const rendered = render(<SelectInput {...props} />);
    expect(rendered.baseElement).toBeInTheDocument();
  });
});
