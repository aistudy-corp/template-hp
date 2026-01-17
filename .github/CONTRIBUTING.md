# Contributing Guide

Thank you for your interest in contributing! This document provides guidelines for contributing to this project.

## Getting Started

1. Fork the repository
2. Clone your fork
3. Create a feature branch from `develop`
4. Make your changes
5. Submit a pull request

## Development Setup

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/REPO_NAME.git
cd REPO_NAME

# Add upstream remote
git remote add upstream https://github.com/aistudy-corp/REPO_NAME.git

# Create feature branch
git checkout -b feature/your-feature develop
```

## Branch Naming

| Type    | Pattern     | Example                 |
| ------- | ----------- | ----------------------- |
| Feature | `feature/*` | `feature/user-auth`     |
| Bug fix | `fix/*`     | `fix/login-error`       |
| Hotfix  | `hotfix/*`  | `hotfix/security-patch` |
| Docs    | `docs/*`    | `docs/api-reference`    |

## Commit Messages

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

### Types

| Type       | Description                   |
| ---------- | ----------------------------- |
| `feat`     | New feature                   |
| `fix`      | Bug fix                       |
| `docs`     | Documentation only            |
| `style`    | Code style (formatting, etc.) |
| `refactor` | Code refactoring              |
| `test`     | Adding or updating tests      |
| `chore`    | Build process, dependencies   |
| `perf`     | Performance improvement       |

### Examples

```
feat(auth): add OAuth2 login support
fix(api): handle null response in user endpoint
docs: update installation guide
chore(deps): upgrade dependencies
```

## Pull Request Process

1. **Update documentation** if needed
2. **Add tests** for new features
3. **Ensure all tests pass**
4. **Follow the PR template**
5. **Request review** from maintainers

## Code Style

- Follow existing code patterns
- Use meaningful variable/function names
- Write self-documenting code
- Add comments for complex logic only

## Testing

```bash
# Run tests (add your command)
npm test
# or
cargo test
# or
go test ./...
```

## Questions?

- Open a [Discussion](https://github.com/aistudy-corp/REPO_NAME/discussions)
- Check existing [Issues](https://github.com/aistudy-corp/REPO_NAME/issues)

## Code of Conduct

Be respectful and inclusive. We follow the [Contributor Covenant](https://www.contributor-covenant.org/).
