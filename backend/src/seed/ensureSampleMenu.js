import Category from "../models/Category.js";
import MenuItem from "../models/MenuItem.js";
import { categories, menuItems } from "./sampleMenu.js";

export async function ensureSampleMenu() {
  const categoriesByName = new Map();
  let categoriesInserted = 0;

  for (const categoryData of categories) {
    const existingCategory = await Category.findOne({ name: categoryData.name });
    const category = await Category.findOneAndUpdate(
      { name: categoryData.name },
      { $setOnInsert: { ...categoryData, isActive: true } },
      { new: true, upsert: true }
    );
    categoriesByName.set(category.name, category);
    if (!existingCategory) categoriesInserted += 1;
  }

  let itemsInserted = 0;
  for (const item of menuItems) {
    const category = categoriesByName.get(item.categoryName);
    const result = await MenuItem.updateOne(
      { name: item.name },
      { $setOnInsert: { ...item, category: category._id, categoryName: category.name } },
      { upsert: true }
    );
    if (result.upsertedCount) itemsInserted += 1;
  }

  return { categoriesInserted, itemsInserted };
}
