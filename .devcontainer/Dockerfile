# See here for image contents: https://github.com/microsoft/vscode-dev-containers/tree/v0.222.0/containers/dotnet/.devcontainer/base.Dockerfile

# [Choice] .NET version: 7.0, 6.0, 5.0, 3.1, 7.0-bullseye, 6.0-bullseye, 5.0-bullseye, 3.1-bullseye, 6.0-focal, 5.0-focal, 3.1-focal
ARG VARIANT="dev-9.0-bookworm-slim"
FROM mcr.microsoft.com/vscode/devcontainers/dotnet:${VARIANT}

# Install Node.js 
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
RUN apt-get install -y nodejs

# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>

# [Optional] Uncomment this line to install global node packages.
# RUN su vscode -c "source /usr/local/share/nvm/nvm.sh && npm install -g <your-package-here>" 2>&1