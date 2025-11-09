# ParkPal 2.0 Migration Notes

## Ported from Legacy

✅ **Types** (`src/types.ts`)
- All TypeScript interfaces and enums copied
- No changes needed - fully compatible with React Native

✅ **Constants** (`src/constants.ts`)
- Copied from legacy
- ⚠️ **NEEDS ADAPTATION**: Contains Tailwind CSS classes that don't work in React Native

## Next Steps

### 1. Styling System
The legacy app uses Tailwind CSS classes like:
- `bg-blue-900`
- `text-blue-100`
- `from-blue-500 to-cyan-400`

**Options for React Native:**
- **Option A**: Install NativeWind (Tailwind for React Native)
- **Option B**: Convert to StyleSheet objects
- **Option C**: Use styled-components for React Native

### 2. Components to Port
- [ ] Icon system (convert SVGs to react-native-svg format)
- [ ] Navigation (use React Navigation)
- [ ] UI components (View, Text, Pressable instead of div, span, button)
- [ ] Forms and inputs
- [ ] Date pickers
- [ ] Modal components

### 3. Data & State
- [ ] Port data fetching logic
- [ ] Convert localStorage to AsyncStorage
- [ ] Set up state management (Context/Redux)

### 4. Platform-Specific Features
- [ ] Camera integration (for memories)
- [ ] Native sharing
- [ ] Push notifications (optional)
- [ ] Offline support

## Current Status

**Completed:**
- ✅ Project initialized with Expo + TypeScript
- ✅ react-native-svg installed
- ✅ react-native-web installed (cross-platform support)
- ✅ Types and constants ported

**In Progress:**
- ⏳ Styling system decision needed
