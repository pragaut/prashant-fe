import { ComponentMeta, ComponentStory } from '@storybook/react';
import DataTableTemplate, { IDataTableTemplate } from './DataTableTemplate';
import { mockDataTableTemplateProps } from './DataTableTemplate.mocks';

export default {
  title: 'ui/DataTableTemplate',
  component: DataTableTemplate,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof DataTableTemplate>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DataTableTemplate> = (args) => (
  <DataTableTemplate {...args} />
);

export const DataTable = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

DataTable.args = {
  ...mockDataTableTemplateProps.DataTable,
} as IDataTableTemplate;
