import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const AdminEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="email" source="email" type="email" />
        <TextInput label="firstName" source="firstName" />
        <DateTimeInput label="lastLoginAt" source="lastLoginAt" />
        <TextInput label="lastName" source="lastName" />
        <TextInput label="password" source="password" />
        <TextInput label="role" source="role" />
        <TextInput label="username" source="username" />
      </SimpleForm>
    </Edit>
  );
};
