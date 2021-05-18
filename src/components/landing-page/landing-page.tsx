import { Component, h } from '@stencil/core';


@Component({
    tag: 'landing-page',
    styleUrl: 'landing-page.css'
})
export class LandingPage {
    render() {
        return (
            <div>
                <p>Hello LandingPage!</p>
            </div>
        );
    }
}
