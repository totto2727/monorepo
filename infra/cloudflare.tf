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
  ttl     = 1
  proxied = true
  type    = "CNAME"
  value   = "www.notion.so"
}
