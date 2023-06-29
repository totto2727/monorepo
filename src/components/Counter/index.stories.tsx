import type {Meta, Story} from '@storybook/react';

import {Counter, IncrementButton} from './';

function CounterStory() {
    return (
        <div>
            <div><Counter/></div>
            <div><IncrementButton>+1</IncrementButton></div>
        </div>
    )
}

const meta: Meta<typeof CounterStory> = {
    component: CounterStory,
};

export default meta;

// @ts-ignore
export const Default: Story = {};