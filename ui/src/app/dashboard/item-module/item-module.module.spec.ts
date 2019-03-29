import { ItemModuleModule } from './item-module.module';

describe('ItemModuleModule', () => {
  let itemModuleModule: ItemModuleModule;

  beforeEach(() => {
    itemModuleModule = new ItemModuleModule();
  });

  it('should create an instance', () => {
    expect(itemModuleModule).toBeTruthy();
  });
});
