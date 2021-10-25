import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CollaboratorItem from './CollaboratorItem';
import { action } from '@storybook/addon-actions';

storiesOf('CollaboratorItem', module)
  .add('Default - no collaborator', () => (
    <CollaboratorItem
      onPressAction={action('collaborator pressed')}
    />
  ))
  .add('Default - collaborator', () => (
    <CollaboratorItem
      collaborator={{
        name: 'Collaborator Name',
        email: 'collaborator@email.com',
       }}
       onPressAction={action('collaborator pressed')}
    />
  ))
  .add('Default - collaborator - no name', () => (
    <CollaboratorItem
      collaborator={{
        name: undefined,
        email: 'collaborator@email.com',
       }}
       onPressAction={action('collaborator pressed')}
    />
  ));
