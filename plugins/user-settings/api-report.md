## API Report File for "@backstage/plugin-user-settings"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { ApiRef } from '@backstage/core';
import { BackstagePlugin } from '@backstage/core';
import { IconComponent } from '@backstage/core';
import { RouteRef } from '@backstage/core';
import { SessionApi } from '@backstage/core';

// @public (undocumented)
export const AuthProviders: ({ providerSettings }: Props_2) => JSX.Element;

// @public (undocumented)
export const DefaultProviderSettings: ({ configuredProviders }: Props_3) => JSX.Element;

// @public (undocumented)
export const ProviderSettingsItem: ({ title, description, icon: Icon, apiRef, }: Props_4) => JSX.Element;

// @public (undocumented)
export const Router: ({ providerSettings }: Props) => JSX.Element;

// @public (undocumented)
export const Settings: () => JSX.Element;

// @public (undocumented)
export const UserSettingsPage: ({ providerSettings }: {
    providerSettings?: JSX.Element | undefined;
}) => JSX.Element;

// @public (undocumented)
const userSettingsPlugin: BackstagePlugin<{
    settingsPage: RouteRef<undefined>;
}, {}>;

export { userSettingsPlugin as plugin }

export { userSettingsPlugin }


// (No @packageDocumentation comment for this package)

```
