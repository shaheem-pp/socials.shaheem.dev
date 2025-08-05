# 🔗 Simple Linktree

A beautiful, minimal Linktree clone that's **super easy** to customize.

## ✨ What I Simplified

Your project is now **much simpler**:

### Before vs After
- ❌ **Before**: Multiple arrays (`SOCIAL_LINKS`, `ADDITIONAL_LINKS`) 
- ✅ **After**: One simple `LINKS` array

- ❌ **Before**: Manual color management for each link
- ✅ **After**: Automatic colors based on platform names

- ❌ **Before**: Complex component logic with multiple sections
- ✅ **After**: Clean, simple components with clear structure

## 🚀 How to Customize (Super Easy!)

### 1. Update Your Profile
Edit `src/constants.ts` - just change these values:
```typescript
export const PROFILE = {
  name: "Your Name",
  title: "Your Job Title", 
  bio: "Your bio here...",
  location: "Your City",
  email: "mailto:your@email.com",
}
```

### 2. Add/Edit Links
In the same file, just copy any link and change the values:
```typescript
{
  name: "Your Platform",
  url: "https://yourlink.com",
  icon: Globe, // Pick any icon from lucide-react
  description: "What this link is for",
  featured: true, // true = main section, false = "More Links"
},
```

### 3. Reorder Links
Just drag the link blocks up/down in the array - that's it!

## 🎨 What's Automatic Now

- **Colors**: Automatically assigned based on platform names
- **Sections**: Main links vs "More Links" based on `featured: true/false`
- **SEO**: Page title and description auto-generated from your profile
- **Responsive**: Works perfectly on all devices

## 📁 Project Structure (Simplified)

```
src/
├── constants.ts          ← Edit this file only!
├── app/
│   ├── page.tsx         ← Main page (simplified)
│   └── layout.tsx       ← SEO settings (auto-generated)
└── components/
    ├── ProfileCard.tsx  ← Your profile section (clean)
    ├── LinkCard.tsx     ← Individual link buttons (simple)
    └── ParticleBackground.tsx ← Fancy background
```

## 🛠️ Available Icons

Import any icon from [Lucide React](https://lucide.dev/icons/):
- `Globe`, `Github`, `Linkedin`, `Mail`, `Twitter`
- `Instagram`, `Youtube`, `ExternalLink`
- And 1000+ more!

## 🎯 Key Improvements

1. **One File to Rule Them All**: Only edit `constants.ts`
2. **No Technical Knowledge Needed**: Just change text values
3. **Automatic Everything**: Colors, sections, SEO all handled
4. **Clean Code**: Easy to understand and maintain
5. **Future-Proof**: Simple to add new features

---

**That's it!** Your Linktree is now super simple to customize. Just edit `constants.ts` and you're done! 🎉
