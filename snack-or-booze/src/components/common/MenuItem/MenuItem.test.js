import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

import MenuItem from './MenuItem';
import Menu from '../Menu/Menu';

// Mock data for testing
const mockItems =
{
    snacks: [
        { id: '1', name: 'Snack 1', description: 'Description 1', recipe: 'Recipe 1', serve: 'Serve 1' },
        { id: '2', name: 'Snack 2', description: 'Description 2', recipe: 'Recipe 2', serve: 'Serve 2' }
    ]
};

describe('MenuItem', () => {
    test('renders correct snack details', () => {
        const { getByText } = render(
            <MemoryRouter initialEntries={['/snacks/1']}>
                <Route path="/snacks/:id">
                    <MenuItem items={mockItems} cantFind="/not-found" />
                </Route>
            </MemoryRouter>
        );

        // Check if the correct details are rendered for the given snack id
        expect(getByText('Snack 1')).toBeInTheDocument();
        expect(getByText('Description 1')).toBeInTheDocument();
        expect(getByText('Recipe 1')).toBeInTheDocument();
        expect(getByText('Serve 1')).toBeInTheDocument();
    });

    test('redirects to snacks page if item is not found', () => {
        const { getByText } = render(
            <MemoryRouter initialEntries={['/snacks/50']}>
                <Route path="/snacks">
                    <Menu items={mockItems} />
                </Route>
                <Route path="/snacks/:id">
                    <MenuItem items={mockItems} />
                </Route>
            </MemoryRouter>
        );
        expect(getByText('Snacks Menu')).toBeInTheDocument();
    });
});
