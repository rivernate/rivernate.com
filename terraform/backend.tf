terraform {
    backend "s3" {
        bucket = "terraform.rivernate.com"
        key = "rivernate.com/root_domain"
        region = "us-west-2"
    }
}
