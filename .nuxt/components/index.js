export const AccountProfileImage = () => import('../..\\components\\account\\profile-image.vue' /* webpackChunkName: "components/account-profile-image" */).then(c => wrapFunctional(c.default || c))
export const FooterDefault = () => import('../..\\components\\footer\\footer-default.vue' /* webpackChunkName: "components/footer-default" */).then(c => wrapFunctional(c.default || c))
export const NavbarDefault = () => import('../..\\components\\navbar\\navbar-default.vue' /* webpackChunkName: "components/navbar-default" */).then(c => wrapFunctional(c.default || c))
export const NavbarItem = () => import('../..\\components\\navbar\\navbar-item.vue' /* webpackChunkName: "components/navbar-item" */).then(c => wrapFunctional(c.default || c))
export const HeaderDefault = () => import('../..\\components\\header\\header-default.vue' /* webpackChunkName: "components/header-default" */).then(c => wrapFunctional(c.default || c))
export const HeaderSidebar = () => import('../..\\components\\header\\sidebar.vue' /* webpackChunkName: "components/header-sidebar" */).then(c => wrapFunctional(c.default || c))
export const PagesBreadcrumbs = () => import('../..\\components\\pages\\breadcrumbs.vue' /* webpackChunkName: "components/pages-breadcrumbs" */).then(c => wrapFunctional(c.default || c))
export const PagesFormField = () => import('../..\\components\\pages\\form-field.vue' /* webpackChunkName: "components/pages-form-field" */).then(c => wrapFunctional(c.default || c))
export const PagesFormPassword = () => import('../..\\components\\pages\\form-password.vue' /* webpackChunkName: "components/pages-form-password" */).then(c => wrapFunctional(c.default || c))
export const PagesLoading = () => import('../..\\components\\pages\\loading.vue' /* webpackChunkName: "components/pages-loading" */).then(c => wrapFunctional(c.default || c))
export const PagesNotification = () => import('../..\\components\\pages\\notification.vue' /* webpackChunkName: "components/pages-notification" */).then(c => wrapFunctional(c.default || c))
export const TopbarDefault = () => import('../..\\components\\topbar\\topbar-default.vue' /* webpackChunkName: "components/topbar-default" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
