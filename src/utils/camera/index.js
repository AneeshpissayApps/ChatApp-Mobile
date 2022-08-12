import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

export function isHeaderShown(route) {
  const routeName = getFocusedRouteNameFromRoute(route);
  console.log(routeName);
}