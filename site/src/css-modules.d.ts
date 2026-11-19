// Modules Sass (docusaurus-plugin-sass) : @docusaurus/module-type-aliases ne déclare que *.module.css.
declare module "*.module.scss" {
  const classes: { readonly [key: string]: string };
  export default classes;
}
