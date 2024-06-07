const sheet = new CSSStyleSheet();
sheet.replaceSync(`.article-header {
    font-weight: bold;
    font-size: var(--font-size-small);
    text-transform: uppercase;
    position: relative;
    padding-top: var(--content-spacing-small);
    padding-bottom: var(--content-spacing-large);
    pointer-events: none;
}

.article-header::before,
.article-header::after {
    content: "";
    display: block;
    position: absolute;
    inset-inline-start: 0;
    top: 0;
}

.article-header::before {
    background-color: var(--theme-link-highlight);
    width: var(--content-spacing-large);
    height: 4px;
    transition: var(--transition-default);
}

.article-header:hover::before {
    width: 100%;
}

.article-header::after {
    border-top: 1px solid var(--color-utils-offwhite);
    right: 0;
    width: 100%;
}

.article-header a {
    display: flex;
    text-decoration: none;
    color: var(--theme-text-dark);
    pointer-events: auto;
}

.article-body {
    display: flex;
    flex-direction: column;
    position: relative;
}

.article-body a {
    text-decoration: none;
    color: var(--theme-link-color);
    transition: var(--transition-default);
    display: flex;
}

.article-body a:hover {
    color: var(--theme-link-hover);
    text-decoration: underline;
}

.article-image-container {
    display: flex;
    width: 100%;
    height: auto;
    flex-direction: column;
    flex-shrink: 0;
    position: relative;
    background-color: var(--theme-image-placeholder);
}

.article-image {
    display: flex;
    width: 100%;
    height: auto;
    line-height: 0;
}

.article-image img {
    height: auto;
    object-fit: cover;
    object-position: center;
    width: 100%;
}

.article-image-captions {
    font-size: var(--font-size-small);
    margin-top: var(--content-spacing-xsmall);
}

.article-image-tag {
    display: flex;
    flex-direction: row;
    align-items: center;
    position: absolute;
    inset-inline-start: 0;
    bottom: 0;
    font-size: var(--font-size-small);
    background-color: var(--theme-tag-background-gray);
    color: var(--theme-text-lighter);
    padding: var(--content-spacing-xsmall) var(--content-spacing-small);
    text-transform: uppercase;
    border: var(--theme-small-border);
}

.article-image-tag.breaking {
    background-color: var(--theme-tag-background-red);
}

.article-image-tag.watch {
    background-color: var(--theme-tag-background-gray);
}

.article-image-tag svg {
    width: var(--icon-size-tiny);
    height: var(--icon-size-tiny);
    margin-inline-end: var(--content-spacing-small);
}

.article-image-tag svg path {
    fill: var(--theme-icon-fill-light);
}

.article-title {
    display: flex;
    flex-direction: row;
    font-weight: bold;
    line-height: var(--font-size-xlarge);
    margin-top: var(--content-spacing-large);
    font-size: var(--font-size-large);
}

.article-content {
    display: flex;
    flex-direction: column;
    font-size: var(--font-size-medium);
    line-height: var(--font-size-xlarge);
    margin-top: var(--content-spacing-large);
    white-space: pre-wrap;
}

.article-content:first-child {
    margin-top: 0;
}

.article-list {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    list-style-type: none;
}

.article-list-item {
    display: flex;
    position: relative;
}

.horizontal .article-list-item {
    flex-direction: row;
}

.vertical .article-list-item {
    flex-direction: column;
}

.article-list-item:not(:last-child) {
    margin-bottom: var(--content-spacing-medium);
    padding-bottom: var(--content-spacing-medium);
    border-bottom: 1px solid var(--color-utils-offwhite);
}

.article-list.bullets {
    list-style-type: disc;
    padding-inline-start: 1em;
}

.article-list.bullets .article-list-item {
    display: list-item;
}

.article-list.bullets .article-list-item:not(:last-child) {
    padding-bottom: 0;
    border-bottom: none;
}

.article-list-item .article-hero {
    display: flex;
    width: 33.33%;
    flex-direction: column;
    flex-shrink: 0;
    min-width: 130px;
    position: relative;
}

.article-list-item .article-content {
    margin-top: 0;
    margin-inline-start: var(--content-spacing-large);
    width: 66.66%;
}


.article-list-content {
    display: flex;
    flex-direction: column;
    font-size: var(--font-size-medium);
    line-height: var(--font-size-xlarge);
}

.article-list-content .article-title {
    margin-top: 0;
    margin-bottom: var(--content-spacing-large);
}


.article-video-container {
    display: flex;
    width: 100%;
    height: auto;
    flex-direction: column;
    flex-shrink: 0;
    position: relative;
    background-color: var(--theme-image-placeholder);
}

.article-video-captions {
    font-size: var(--font-size-small);
    margin-top: var(--content-spacing-xsmall);
}

@media (forced-colors: active) {
    .article-image-tag {
        border: var(--high-contrast-small-border);
    }

    .article-image-tag svg path {
        fill: var(--high-contrast-icon-fill-light, var(--color-system-linktext));
    }
}
`);
export default sheet;
