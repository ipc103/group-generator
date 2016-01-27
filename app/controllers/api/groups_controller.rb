class Api::GroupsController < ApplicationController
  skip_before_filter :require_login
  respond_to :html, :json

  def index
    @groups = Group.joins(:students).where('students.cohort_id = ?', params[:cohort]).uniq
    respond_with(@groups, include: :students)
  end


  def show
     @groups = Group.joins(:students).select('groups.id as sgid, group_type_id, code, students.name as student_name').where(code: params[:id])
    respond_with(@groups)
  end
end
