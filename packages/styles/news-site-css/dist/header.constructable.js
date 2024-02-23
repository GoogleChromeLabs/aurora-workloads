const sheet = new CSSStyleSheet();
sheet.replaceSync(`.page-header {
    display: flex;
    width: 100%;
    font-size: var(--font-size-xxxlarge);
    font-weight: bold;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: var(--theme-text-light);
    background-color: var(--theme-ui-foreground);
    z-index: var(--indxe-content-title);
    padding: var(--content-spacing-xlarge) var(--content-spacing-xlarge) var(--content-spacing-xsmall) var(--content-spacing-xlarge);
}

.page-header .page-header-title {
    display: flex;
    flex-shrink: 1;
    padding-bottom: var(--content-spacing-small);
    border-bottom: 1px solid var(--color-utils-gray);
}

.page-header-title svg path {
    fill: var(--theme-icon-fill-light);
    transition: var(--transition-default);
}

.page-header-title:hover svg path {
    fill: var(--theme-icon-fill-lighter);
}

@media (forced-colors: active) {
    .page-header-title svg path {
        fill: var(--high-contrast-icon-fill-light, var(--color-system-linktext));
    }

    .page-header-title:hover svg path {
        fill: var(--high-contrast-icon-fill-light, var(--color-system-linktext));
    }
}
`);
export default sheet;
