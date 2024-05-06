import { test, expect } from '@playwright/experimental-ct-react';
import PlaneList from './PlaneList';
import type { HooksConfig } from '../../playwright';

test('should render list of planes', async ({ mount }) => { 
  const planes = [
    { id: 1, name: "Wright Flyer" },
    { id: 2, name: "Wright Model A" },
    { id: 3, name: "Wright Model B" },
  ];

  const component = await mount<HooksConfig>(<PlaneList planes={planes}/>, {
    hooksConfig: { routing: true },
  });

  const listItems = await component.locator('li').all();

  expect(listItems).toHaveLength(3);
});