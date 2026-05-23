import type { QueryClient } from '@tanstack/react-query';
import { Outlet, createRootRouteWithContext } from '@tanstack/react-router';
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools';
import { TanStackDevtools } from '@tanstack/react-devtools';

interface RouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootRoute,
});

function RootRoute() {
  return (
    <>
      <div className='font-sans antialiased wrap-anywhere'>
        <Outlet />
      </div>
      <TanStackDevtools
        config={{
          position: 'bottom-right',
        }}
        plugins={[
          {
            name: 'Tanstack Router',
            render: <TanStackRouterDevtoolsPanel />,
          },
        ]}
      />
    </>
  );
}
