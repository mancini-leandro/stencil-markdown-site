import { h } from '@stencil/core';
import { createProviderConsumer } from '@stencil/state-tunnel';

export interface SiteState {
  isLeftSidebarIn: boolean,
  toggleLeftSidebar: () => void
}

export default createProviderConsumer<SiteState>({
    isLeftSidebarIn: false,
    toggleLeftSidebar: () => {}
  },
  (subscribe, child) => {
    console.log(child)
    console.log(subscribe)

    return <context-consumer subscribe={subscribe} renderer={child} />;
  }
);