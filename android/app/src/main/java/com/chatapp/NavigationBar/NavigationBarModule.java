package com.chatapp.NavigationBar;

import static com.facebook.react.bridge.UiThreadUtil.runOnUiThread;

import android.animation.ArgbEvaluator;
import android.animation.ValueAnimator;
import android.app.Activity;
import android.graphics.Color;
import android.os.Build;
import android.view.View;
import android.view.Window;
import android.view.WindowManager;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.IllegalViewOperationException;

import org.jetbrains.annotations.NotNull;

public class NavigationBarModule extends ReactContextBaseJavaModule {
    public static final String REACT_NAME = "NavigationBar";
    private static final String ERROR_NO_ACTIVITY = "E_NO_ACTIVITY";
    private static final String ERROR_NO_ACTIVITY_MESSAGE = "Tried to change the navigation bar while not attached to an Activity";

    public NavigationBarModule(ReactApplicationContext context) {
        // Pass in the context to the constructor and save it so you can emit events
        // https://facebook.github.io/react-native/docs/native-modules-android.html#the-toast-module
        super(context);
    }

    public void setNavigationBarTheme(Activity activity, Boolean light) {
        if (activity != null && Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            Window window = activity.getWindow();
            int flags = window.getDecorView().getSystemUiVisibility();
            if (light) {
                flags |= View.SYSTEM_UI_FLAG_LIGHT_NAVIGATION_BAR;
            } else {
                flags &= ~View.SYSTEM_UI_FLAG_LIGHT_NAVIGATION_BAR;
            }
            window.getDecorView().setSystemUiVisibility(flags);
        }
    }

    @Override
    @NotNull
    public String getName() {
        // Tell React the name of the module
        // https://facebook.github.io/react-native/docs/native-modules-android.html#the-toast-module
        return REACT_NAME;
    }

    @ReactMethod
    public void changeNavigationBarColor(final String color, final Boolean light, final Boolean animated, final Promise promise) {
        final WritableMap map = Arguments.createMap();
            if (getCurrentActivity() != null) {
                try {
                    final Window window = getCurrentActivity().getWindow();
                    runOnUiThread(() -> {
                        if (color.equals("transparent") || color.equals("translucent")) {
                            window.clearFlags(WindowManager.LayoutParams.FLAG_LAYOUT_NO_LIMITS);
                            window.clearFlags(WindowManager.LayoutParams.FLAG_TRANSLUCENT_NAVIGATION);
                            if (color.equals("transparent")) {
                                window.setFlags(WindowManager.LayoutParams.FLAG_LAYOUT_NO_LIMITS, WindowManager.LayoutParams.FLAG_LAYOUT_NO_LIMITS);
                            } else {
                                window.setFlags(WindowManager.LayoutParams.FLAG_TRANSLUCENT_NAVIGATION, WindowManager.LayoutParams.FLAG_TRANSLUCENT_NAVIGATION);
                            }
                            setNavigationBarTheme(getCurrentActivity(), light);
                            map.putBoolean("success", true);
                            promise.resolve(map);
                            return;
                        } else {
                            window.clearFlags(WindowManager.LayoutParams.FLAG_LAYOUT_NO_LIMITS);
                            window.clearFlags(WindowManager.LayoutParams.FLAG_TRANSLUCENT_NAVIGATION);
                        }
                        if (animated) {
                            Integer colorFrom = window.getNavigationBarColor();
                            Integer colorTo = Color.parseColor(color);
                            //window.setNavigationBarColor(colorTo);
                            ValueAnimator colorAnimation = ValueAnimator.ofObject(new ArgbEvaluator(), colorFrom, colorTo);
                            colorAnimation.addUpdateListener(animator -> window.setNavigationBarColor((Integer) animator.getAnimatedValue()));
                            colorAnimation.start();
                        } else {
                            window.setNavigationBarColor(Color.parseColor(color));
                        }
                        setNavigationBarTheme(getCurrentActivity(), light);
                        WritableMap map1 = Arguments.createMap();
                        map1.putBoolean("success", true);
                        promise.resolve(map1);
                    });
                } catch (IllegalViewOperationException e) {
                    map.putBoolean("success", false);
                    promise.reject("error", e);
                }

            } else {
                promise.reject(ERROR_NO_ACTIVITY, new Throwable(ERROR_NO_ACTIVITY_MESSAGE));

            }
    }
}
