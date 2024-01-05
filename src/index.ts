// Ensure this runtime has an HTMLRewriter
// Many environments that the Context is used inject
// an htmlrewriter instance, in certain environemnts
// (looking at you Node) it is not, this resolves that.
if (!(globalThis as any).HTMLRewriter) {
  await import('htmlrewriter').then(module => {
    (globalThis as any).HTMLRewriter = module.HTMLRewriter;
  });
}

export {};
