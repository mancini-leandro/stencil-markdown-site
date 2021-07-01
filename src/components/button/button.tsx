import { Component, h, Host } from '@stencil/core';


@Component({
    tag: 'app-button',
    styleUrl: 'button.scss'
})
export class Button {

    

    render() {
        return (
            <Host>
                <slot />
            </Host>
        );
    }
}
