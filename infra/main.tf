variable "CLOUDFLARE_API_KEY" {
  type = string
}

variable "CLOUDFLARE_ZONE_ID" {
  type = string
}

variable "CLOUDFLARE_ACCOUNT_ID" {
  type = string
}

variable "CLOUDFLARE_DOMAIN" {
  type = string
}

variable "MICROCMS_API_KEY" {
  type = string
}

variable "MICROCMS_SERVICE_DOMAIN" {
  type = string
}

variable "PUBLIC_DATA_CF_BEACON_TOKEN_ID_KEYWARD_GAME" {
  type = string
}

variable "DATA_CF_BEACON_TOKEN_ID_WWW" {
  type = string
}

terraform {
  required_providers {
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "~> 4"
    }
  }
}

provider "cloudflare" {
  api_token = var.CLOUDFLARE_API_KEY
}

resource "cloudflare_record" "notion" {
  zone_id = var.CLOUDFLARE_ZONE_ID
  name    = "notion"
  type    = "CNAME"
  value   = "www.notion.so"
  proxied = true
}

resource "cloudflare_pages_project" "keyword-game" {
  account_id        = var.CLOUDFLARE_ACCOUNT_ID
  name              = "keyword-game"
  production_branch = "main"
  deployment_configs {
    preview {
      environment_variables = {}
      secrets               = {}
      compatibility_date    = "2023-08-12"
      fail_open             = false
      usage_model           = "bundled"
      placement {
        mode = "smart"
      }
    }
    production {
      environment_variables = {}
      secrets               = {
        PUBLIC_DATA_CF_BEACON_TOKEN_ID = var.PUBLIC_DATA_CF_BEACON_TOKEN_ID_KEYWARD_GAME
      }
      fail_open             = false
      compatibility_date    = "2023-08-12"
      usage_model           = "bundled"
      placement {
        mode = "smart"
      }
    }
  }
}

resource "cloudflare_record" "keyword-game" {
  zone_id = var.CLOUDFLARE_ZONE_ID
  name    = "keyword"
  type    = "CNAME"
  value   = cloudflare_pages_project.keyword-game.subdomain
  proxied = true
}

resource "cloudflare_pages_domain" "keyword-game" {
  account_id   = var.CLOUDFLARE_ACCOUNT_ID
  project_name = cloudflare_pages_project.keyword-game.name
  domain       = cloudflare_record.keyword-game.hostname
}

resource "cloudflare_pages_project" "www" {
  account_id        = var.CLOUDFLARE_ACCOUNT_ID
  name              = "www"
  production_branch = "main"

  deployment_configs {
    preview {
      environment_variables = {}
      secrets = {
        MICROCMS_API_KEY        = var.MICROCMS_API_KEY
        MICROCMS_SERVICE_DOMAIN = var.MICROCMS_SERVICE_DOMAIN
      }
      compatibility_date = "2023-08-12"
      fail_open          = false
      usage_model        = "bundled"
      placement {
        mode = "smart"
      }
    }
    production {
      environment_variables = {}
      secrets = {
        MICROCMS_API_KEY        = var.MICROCMS_API_KEY
        MICROCMS_SERVICE_DOMAIN = var.MICROCMS_SERVICE_DOMAIN
        DATA_CF_BEACON_TOKEN_ID = var.DATA_CF_BEACON_TOKEN_ID_WWW
      }
      compatibility_date = "2023-08-12"
      fail_open          = false
      usage_model        = "bundled"
      placement {
        mode = "smart"
      }
    }
  }
}

resource "cloudflare_record" "www" {
  zone_id = var.CLOUDFLARE_ZONE_ID
  name    = "www"
  type    = "CNAME"
  value   = cloudflare_pages_project.www.subdomain
  proxied = true
}

resource "cloudflare_pages_domain" "www" {
  account_id   = var.CLOUDFLARE_ACCOUNT_ID
  project_name = cloudflare_pages_project.www.name
  domain       = cloudflare_record.www.hostname
}

