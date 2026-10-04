# Automatic Git Commit & Push Rule

Always adhere to the following workflow for all tasks in this repository:

1. **Auto-commit and Auto-push**: Whenever a feature, fix, or update is implemented and verified (build/test clean), proactively run:
   ```bash
   git add .
   git commit -m "<semantic descriptive message>"
   git push origin main
   ```
2. **Never wait for explicit prompt**: The user should never have to ask "push to git" or remind you to push. Always push completed working code automatically at the end of each step.
