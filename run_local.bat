@echo off
echo Starting Jekyll development server...
echo.
echo If this is your first time running, please install Jekyll first:
echo   gem install jekyll bundler
echo.

REM Try different Jekyll commands in order of preference
echo Attempting to start Jekyll server...

REM Method 1: Try bundle exec first
bundle exec jekyll serve --port 4000 --host 0.0.0.0 --livereload
if %ERRORLEVEL% NEQ 0 (
    echo.
    echo Bundle exec failed, trying direct Jekyll...
    
    REM Method 2: Try direct Jekyll
    jekyll serve --port 4000 --host 0.0.0.0 --livereload
    if %ERRORLEVEL% NEQ 0 (
        echo.
        echo Direct Jekyll failed, trying without livereload...
        
        REM Method 3: Try without livereload
        jekyll serve --port 4000 --host 0.0.0.0
        if %ERRORLEVEL% NEQ 0 (
            echo.
            echo All methods failed. Please check your Jekyll installation.
            echo Try running: gem install jekyll bundler
            pause
        )
    )
)
