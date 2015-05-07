class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  
  # Turns on protection from request forgeries
  protect_from_forgery
  
  after_filter :set_csrf_cookie_for_ng
  def set_csrf_cookie_for_ng
    cookies['XSRF-TOKEN'] = form_authenticity_token if protect_against_forgery?
  end
  
  
  protected
  # For rails version 4.1 and below
  # for 4.2 and above there is a different method
    def verified_request?
      super || form_authenticity_token == request.headers['X-XSRF-TOKEN']
    end
  
end

