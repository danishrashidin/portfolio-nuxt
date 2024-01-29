import type { RouterConfig } from "nuxt/schema";

export default <RouterConfig>{
    scrollBehavior: (to, from, savedPosition) => {
        return {
            el: to.hash,
            top: 72
        }
    }
}