import { Component, h } from '@stencil/core';
import { RouterHistory } from '@stencil/router';

import SiteProviderConsumer, { SiteState } from "../../global/site-provider-consumer";

@Component({
    tag: 'app-root',
    styleUrl: 'app-root.css'
})
export class AppRoot {
    history?: RouterHistory;
    
    private setHistory = ({ history }: { history: RouterHistory }) => {
        if (!this.history) {
            this.history = history;
        }
    }

    render() {
        const siteState: SiteState = {
            isLeftSidebarIn: false,
            toggleLeftSidebar: null
        };

        return (
            <SiteProviderConsumer.Provider state={siteState}>
                <h1>HEADER VEM AQUI</h1>
                <main>
                    <stencil-router scrollTopOffset={0}>
                        <stencil-route style={{ display: "none" }} routeRender={this.setHistory} />
                        <stencil-route-switch>
                            <stencil-route url="/" component="landing-page" exact={true} />

                            <stencil-route 
                                url="/docs/:pageName"
                                routeRender={(route) => (
                                    <doc-component page={route!.match.url}></doc-component>
                                )}
                            />
                        </stencil-route-switch>
                    </stencil-router>
                </main>
            </SiteProviderConsumer.Provider>
        );
    }
}
