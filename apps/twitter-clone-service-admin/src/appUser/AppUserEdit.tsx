import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const AppUserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <TextInput label="bio" multiline source="bio" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="password" source="password" />
        <TextInput label="username" source="username" />
      </SimpleForm>
    </Edit>
  );
};
