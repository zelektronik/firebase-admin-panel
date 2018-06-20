import { DynamicInputModel, DynamicFormControlModel, DynamicSelectModel, DynamicFormArrayModel } from '@ng-dynamic-forms/core';

export const SCHEMA_EDIT_FORM_MODEL: DynamicFormControlModel[] = [
    new DynamicInputModel({

        id: 'name',
        label: 'Schema Name',
        maxLength: 50,
        hint: 'Name your schema'
    }),
    new DynamicFormArrayModel({
        id: 'formArray',
        initialCount: 1,
        groupFactory: () => {
            return [
                new DynamicSelectModel({
                    id: 'type',
                    label: 'Type',
                    hint: 'Type of property',
                    options: [
                        { value: 'SELECT', label: 'Select' },
                        { value: 'INPUT', label: 'Input' },
                        { value: 'RADIO_GROUP', label: 'Radio Group' },
                        { value: 'CHECKBOX', label: 'Checkbox' }
                    ]
                }),
                new DynamicInputModel({
                    id: 'id',
                    label: 'Key',
                    maxLength: 50,
                    hint: 'Key/id of your table property'
                }),
                new DynamicInputModel({
                    inputType: '',
                    id: 'label',
                    label: 'Label',
                    maxLength: 50,
                    hint: 'Display label for your table property'
                }),
                new DynamicSelectModel({
                    id: 'inputType',
                    label: 'Input Type',
                    hint: 'Data type your property',
                    options: [
                        { value: 'date', label: 'Date' },
                        { value: 'number', label: 'Number' },
                        { value: 'text', label: 'Text' },
                        { value: 'range', label: 'Range' },
                        { value: 'password', label: 'Password' },
                        { value: 'email', label: 'Email' }
                    ]
                })
            ];
        }
    })
];
