import css from "rollup-plugin-import-css";
import cleaner from "rollup-plugin-cleaner";

import { constructableCSS } from "./plugins/constructable-css/index.js";
import { copyFiles } from "./plugins/copy-files/index.js";

export default {
    input: "src/js/index.js",
    output: [
        {
            file: "dist/index.js",
            format: "es",
        },
    ],
    plugins: [
        cleaner({
            targets: ["./dist/"],
        }),
        css({
            minify: true,
            output: "index.min.css",
        }),
        copyFiles({
            src: ["src/css/*", "!src/css/partials.css"],
            dest: "dist/",
        }),
        copyFiles({
            src: ["src/css/*", "!src/css/partials.css"],
            dest: "dist/",
            rename: (name, extension) => `${name}.module.${extension}`,
        }),
        copyFiles({
            src: [
                "src/css/variables.css",
                "src/css/global.css",
                "src/css/icons.css",
                "src/css/icons-group.css",
                "src/css/button.css",
                "src/css/a11y.css",
                "src/css/input.css",
                "src/css/form.css",
                "src/css/layout.css",
                "src/css/advertisement.css",
                "src/css/header.css",
                "src/css/nav.css",
                "src/css/navbar.css",
                "src/css/footer.css",
                "src/css/dialog.css",
                "src/css/dropdown.css",
                "src/css/article.css",
                "src/css/text.css",
                "src/css/toggle.css",
                "src/css/toast.css",
                "src/css/sitemap.css",
                "src/css/message.css",
                "src/css/sidebar.css",
                "src/css/modal.css",
            ],
            file: "dist/index.css",
        }),
        constructableCSS({
            src: ["src/css/*", "!src/css/partials.css"],
            dest: "dist/",
        }),
    ],
};
